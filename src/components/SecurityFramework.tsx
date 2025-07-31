'use client';
import React from 'react';
import { Shield, Lock, Eye, Server, Users, FileCheck, AlertTriangle, Settings, Monitor, Key, Database, Activity } from 'lucide-react';

const SecurityFramework = () => {
    return (
        <div className="w-full bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-2 gap-8 mb-8">

                    <div className="bg-[#006E81] text-white p-8 rounded-lg">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-2">Certified Security Framework</h2>
                        </div>

                        <div className="space-y-6">

                            <div className="flex items-start space-x-4">
                                <div className="bg-white/20 p-2 rounded-full">
                                    <Shield className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">ISO 27001:2022 Certified</h3>
                                    <p className="text-sm text-white/90">Globally recognized information security standard.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-white/20 p-2 rounded-full">
                                    <Lock className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">ISO 27701:2019 Certified</h3>
                                    <p className="text-sm text-white/90">Privacy management framework ensuring data protection.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-white/20 p-2 rounded-full">
                                    <FileCheck className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Data Classification Policy</h3>
                                    <p className="text-sm text-white/90">Organizes data by sensitivity for proper handling.</p>
                                </div>
                            </div>


                            <div className="flex items-start space-x-4">
                                <div className="bg-white/20 p-2 rounded-full">
                                    <Database className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Data Retention Policy</h3>
                                    <p className="text-sm text-white/90">Defines secure storage and deletion timelines.</p>
                                </div>
                            </div>


                            <div className="flex items-start space-x-4">
                                <div className="bg-white/20 p-2 rounded-full">
                                    <Activity className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Business Continuity Plan</h3>
                                    <p className="text-sm text-white/90">Ensures uninterrupted operations during disruptions.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-white/20 p-2 rounded-full">
                                    <Key className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">User Authentication & Onboarding Checks</h3>
                                    <p className="text-sm text-white/90">Verifies and controls user access from day one.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-gray-200">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-[#006E81] mb-2">Network & Access Controls</h2>
                        </div>

                        <div className="space-y-6">

                            <div className="flex items-start space-x-4">
                                <div className="bg-[#006E81]/10 p-2 rounded-full">
                                    <Shield className="w-6 h-6 text-[#006E81]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Multi-layer Firewall Protection</h3>
                                    <p className="text-sm text-gray-600">Shields networks from unauthorized access.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-[#006E81]/10 p-2 rounded-full">
                                    <AlertTriangle className="w-6 h-6 text-[#006E81]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Enterprise-grade Antivirus</h3>
                                    <p className="text-sm text-gray-600">Detects and prevents malware threats.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-[#006E81]/10 p-2 rounded-full">
                                    <Server className="w-6 h-6 text-[#006E81]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Segregated Network Zones</h3>
                                    <p className="text-sm text-gray-600">Isolates critical systems for added security.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-[#006E81]/10 p-2 rounded-full">
                                    <Lock className="w-6 h-6 text-[#006E81]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Remote Access Restrictions</h3>
                                    <p className="text-sm text-gray-600">Controls and monitors offsite system access.</p>
                                </div>
                            </div>


                            <div className="flex items-start space-x-4">
                                <div className="bg-[#006E81]/10 p-2 rounded-full">
                                    <Users className="w-6 h-6 text-[#006E81]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Role-Based Admin Privileges</h3>
                                    <p className="text-sm text-gray-600">Limits system control based on user roles.</p>
                                </div>
                            </div>


                            <div className="flex items-start space-x-4">
                                <div className="bg-[#006E81]/10 p-2 rounded-full">
                                    <Settings className="w-6 h-6 text-[#006E81]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Approved Software Only</h3>
                                    <p className="text-sm text-gray-600">Prevents installation of unvetted applications.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8">

                    <div className="bg-white p-8 rounded-lg border border-gray-200">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-[#006E81] mb-2">Workplace Security & Compliance</h2>
                        </div>

                        <div className="space-y-6">

                            <div className="flex items-start space-x-4">
                                <div className="bg-[#006E81]/10 p-2 rounded-full">
                                    <Monitor className="w-6 h-6 text-[#006E81]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Clean Desk Policy</h3>
                                    <p className="text-sm text-gray-600">Minimizes risk of data exposure on physical workspaces.</p>
                                </div>
                            </div>


                            <div className="flex items-start space-x-4">
                                <div className="bg-[#006E81]/10 p-2 rounded-full">
                                    <Eye className="w-6 h-6 text-[#006E81]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">CCTV Surveillance</h3>
                                    <p className="text-sm text-gray-600">Monitors premises for security and compliance.</p>
                                </div>
                            </div>


                            <div className="flex items-start space-x-4">
                                <div className="bg-[#006E81]/10 p-2 rounded-full">
                                    <Lock className="w-6 h-6 text-[#006E81]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Restricted Physical Access</h3>
                                    <p className="text-sm text-gray-600">Limits entry to authorized personnel only.</p>
                                </div>
                            </div>


                            <div className="flex items-start space-x-4">
                                <div className="bg-[#006E81]/10 p-2 rounded-full">
                                    <AlertTriangle className="w-6 h-6 text-[#006E81]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">No External Device Usage</h3>
                                    <p className="text-sm text-gray-600">Prevents data leakage through removable media.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-[#006E81]/10 p-2 rounded-full">
                                    <FileCheck className="w-6 h-6 text-[#006E81]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">No Printer Access</h3>
                                    <p className="text-sm text-gray-600">Reduces risk of unauthorized physical document copies.</p>
                                </div>
                            </div>


                            <div className="flex items-start space-x-4">
                                <div className="bg-[#006E81]/10 p-2 rounded-full">
                                    <Shield className="w-6 h-6 text-[#006E81]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Social Media Usage Prohibited</h3>
                                    <p className="text-sm text-gray-600">Prevents distractions and data risks on corporate systems.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg border border-gray-200">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-[#006E81] mb-2">Operational Governance</h2>
                        </div>

                        <div className="space-y-6">

                            <div className="flex items-start space-x-4">
                                <div className="bg-[#006E81]/10 p-2 rounded-full">
                                    <Settings className="w-6 h-6 text-[#006E81]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Managed Admin Privileges</h3>
                                    <p className="text-sm text-gray-600">Controls high-level system permissions.</p>
                                </div>
                            </div>


                            <div className="flex items-start space-x-4">
                                <div className="bg-[#006E81]/10 p-2 rounded-full">
                                    <FileCheck className="w-6 h-6 text-[#006E81]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Periodic Security Audits</h3>
                                    <p className="text-sm text-gray-600">Regular checks to ensure compliance and security.</p>
                                </div>
                            </div>


                            <div className="flex items-start space-x-4">
                                <div className="bg-[#006E81]/10 p-2 rounded-full">
                                    <Lock className="w-6 h-6 text-[#006E81]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Compliance with DPDP Act</h3>
                                    <p className="text-sm text-gray-600">Adheres to personal data protection laws.</p>
                                </div>
                            </div>


                            <div className="flex items-start space-x-4">
                                <div className="bg-[#006E81]/10 p-2 rounded-full">
                                    <AlertTriangle className="w-6 h-6 text-[#006E81]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Incident Monitoring & Response</h3>
                                    <p className="text-sm text-gray-600">Rapid detection and mitigation of threats.</p>
                                </div>
                            </div>


                            <div className="flex items-start space-x-4">
                                <div className="bg-[#006E81]/10 p-2 rounded-full">
                                    <Users className="w-6 h-6 text-[#006E81]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Employee Security Training</h3>
                                    <p className="text-sm text-gray-600">Ongoing awareness to prevent security lapses.</p>
                                </div>
                            </div>


                            <div className="flex items-start space-x-4">
                                <div className="bg-[#006E81]/10 p-2 rounded-full">
                                    <Activity className="w-6 h-6 text-[#006E81]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Access & Activity Logging</h3>
                                    <p className="text-sm text-gray-600">Maintains audit trails for accountability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecurityFramework;